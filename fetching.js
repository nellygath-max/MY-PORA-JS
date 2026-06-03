const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchBtn = document.getElementById("btn");
const statusContainer = document.getElementById("statusContainer");
const userListContainer = document.getElementById("userListContainer");

fetchBtn.addEventListener("click", function() {
    // Clear previous results and show loading state
    userListContainer.innerHTML = '';
    statusContainer.innerHTML = `
        <div class="spinner"></div>
        <div class="status-message">Fetching users data, please wait...</div>
    `;
    
    // Disable button during fetch to prevent multiple rapid clicks
    fetchBtn.disabled = true;
    fetchBtn.innerText = "Loading...";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            // Clear status message
            statusContainer.innerHTML = '';
            
            // Re-enable button
            fetchBtn.disabled = false;
            fetchBtn.innerText = "Get Users";

            if (users.length === 0) {
                statusContainer.innerHTML = `<div class="status-message">No users found.</div>`;
                return;
            }

            // Render each user as a beautiful card
            users.forEach(user => {
                const userCard = document.createElement("div");
                userCard.className = "user-card";
                
                // Get initials for avatar
                const initials = user.name
                    ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                    : 'U';

                userCard.innerHTML = `
                    <div class="user-header">
                        <div class="user-avatar">${initials}</div>
                        <div class="user-name-title">
                            <span class="user-name">${user.name}</span>
                            <span class="user-username">@${user.username}</span>
                        </div>
                    </div>
                    <div class="user-detail">
                        <span class="detail-label">Email:</span>
                        <span class="detail-val"><a href="mailto:${user.email}">${user.email}</a></span>
                    </div>
                    <div class="user-detail">
                        <span class="detail-label">Phone:</span>
                        <span class="detail-val">${user.phone}</span>
                    </div>
                    <div class="user-detail">
                        <span class="detail-label">Website:</span>
                        <span class="detail-val"><a href="http://${user.website}" target="_blank" rel="noopener noreferrer">${user.website}</a></span>
                    </div>
                    <div class="user-detail">
                        <span class="detail-label">Company:</span>
                        <span class="detail-val">${user.company ? user.company.name : 'N/A'}</span>
                    </div>
                `;
                userListContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            
            // Re-enable button
            fetchBtn.disabled = false;
            fetchBtn.innerText = "Get Users";
            
            // Display error to the user
            statusContainer.innerHTML = `
                <div class="error-message">
                    <strong>Error fetching data:</strong> ${error.message}. <br>
                    Please verify your internet connection and try again.
                </div>
            `;
        });
});
