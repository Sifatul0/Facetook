document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.querySelector('.signup-btn');
    const signinBtn = document.querySelector('.signin-btn');
    const signupPage = document.getElementById('signup-page');
    const signinPage = document.getElementById('signin-page');
    const authContainer = document.querySelector('.auth-container');
    const mainContainer = document.querySelector('.main-container');
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const profilePictureFrame = document.querySelector('.profile-picture-frame');
    const profilePicture = document.querySelector('.profile-picture');
    const realNameDisplay = document.querySelector('.real-name');
    const nicknameDisplay = document.querySelector('.nickname');
    const bioDisplay = document.querySelector('.bio');
    const schoolDisplay = document.querySelector('.school');
    const collegeDisplay = document.querySelector('.college');
    const birthdayDisplay = document.querySelector('.birthday-info');
    const relationshipDisplay = document.querySelector('.relationship');
    const emailDisplay = document.querySelector('.email');
    const phoneDisplay = document.querySelector('.phone');

    signupBtn.addEventListener('click', () => {
        signinPage.classList.remove('active');
        signupPage.classList.add('active');
        authContainer.style.height = signupPage.offsetHeight + 'px';
    });

    signinBtn.addEventListener('click', () => {
        signupPage.classList.remove('active');
        signinPage.classList.add('active');
        authContainer.style.height = signinPage.offsetHeight + 'px';
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const realName = signupForm.querySelector('[placeholder="Real Name"]').value;
        const nickname = signupForm.querySelector('[placeholder="Nickname"]').value;
        const bio = signupForm.querySelector('textarea[placeholder="Bio"]').value;
        const school = signupForm.querySelector('[placeholder="School Name"]').value;
        const college = signupForm.querySelector('[placeholder="College Name"]').value;
        const birthday = signupForm.querySelector('#birthday').value;
        const relationship = signupForm.querySelector('[placeholder="Relationship Status"]').value;
        const email = signupForm.querySelector('[placeholder="Email"]').value;
        const phone = signupForm.querySelector('[placeholder="Phone Number"]').value;
        const photoInput = signupForm.querySelector('#profile-photo');
        const videoInput = signupForm.querySelector('#profile-video');

        // For demonstration, we'll just update the profile info on the page
        realNameDisplay.textContent = realName;
        nicknameDisplay.textContent = nickname ? `(${nickname})` : '';
        bioDisplay.textContent = bio;
        schoolDisplay.textContent = school;
        collegeDisplay.textContent = college;
        birthdayDisplay.textContent = birthday;
        relationshipDisplay.textContent = relationship;
        emailDisplay.textContent = email;
        phoneDisplay.textContent = phone;

        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicture.src = e.target.result;
            }
            reader.readAsDataURL(photoInput.files[0]);
        } else {
            profilePicture.src = 'default-profile.png'; // Fallback image
        }

        authContainer.style.display = 'none';
        mainContainer.style.display = 'flex';
    });

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would send the sign-in data to a server for verification.
        authContainer.style.display = 'none';
        mainContainer.style.display = 'flex';
        // You would also fetch user profile data here and populate the profile section.
        realNameDisplay.textContent = "User's Real Name"; // Example
        nicknameDisplay.textContent = "(UserNickname)"; // Example
    });

    // Basic example of adding a post (without server-side interaction)
    const postButton = document.querySelector('.post-creation button');
    const postTextArea = document.querySelector('.post-creation textarea');
    const postsContainer = document.getElementById('posts-container');

    postButton.addEventListener('click', () => {
        const postText = postTextArea.value.trim();
        if (postText) {
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `<p>${postText}</p>
                                 <div class="post-actions">
                                     <button>React</button>
                                     <button>Comment</button>
                                     <button>Share</button>
                                 </div>
                                 <div class="reactions"></div>
                                 <div class="comments"></div>`;
            postsContainer.prepend(newPost);
            postTextArea.value = '';
        }
    });

    // In a real application, you would need to implement:
    // - Fetching and displaying existing posts
    // - Handling friend requests and suggestions dynamically
    // - Implementing reactions, comments, and sharing functionality
    // - Searching for other profiles
    // - Real-time notifications
});