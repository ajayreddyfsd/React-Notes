//say buttong inside the form
// ✅ Use onSubmit on the <form> instead of onClick on the <button>
// because it handles all ways a form can be submitted (like pressing Enter too),
// keeps logic centralized, and prevents issues like accidental page reloads.

// We have two buttons with different purposes:
//
// 1️⃣ The first button ("Sign In") is meant to submit the form with email and password.
//    - It has type="submit", so when clicked (or when the user presses Enter in an input),
//      it triggers the <form>'s onSubmit handler (handleSubmit function).
//    - This is the correct way to handle form-based authentication.
//
// 2️⃣ The second button ("Sign In With Google") is NOT meant to submit the form.
//    - It has type="button", which means it won’t trigger the form’s onSubmit handler.
//    - Instead, it has an onClick that directly calls signInWithGoogle().
//    - This is important because Google sign-in doesn’t use form data,
//      and we don’t want it to accidentally submit the form.
//
// ✅ Using type="submit" vs type="button" helps separate responsibilities clearly:
//    - One button submits the form data.
//    - The other performs an alternate sign-in action.
//
// ✅ General rule of thumb:
//    - For forms: use <form onSubmit={...}> with <button type="submit">.
//    - For non-form actions: use <button type="button" onClick={...}>.
// ❌ If we forget to set type="button", the button might default to "submit" and cause unwanted form submissions.
