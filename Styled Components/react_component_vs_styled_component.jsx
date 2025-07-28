/*
 🧠 Precautions to Avoid Confusion (React Component vs Styled Component)

 1️⃣ Naming Matters:
    - Use "Styled" prefix for styled-components (e.g., StyledCard, StyledButton)
    - Use regular names for React components (e.g., Card, Button)

 2️⃣ File Organization:
    - Keep styled-components in a separate file (e.g., Card.styles.jsx)
    - Import them cleanly: import { StyledCard } from './Card.styles';

 3️⃣ Visual Cue:
    - Styled components usually look like HTML tags (e.g., styled.div`, styled.button`)
    - If it's built with `styled`, it's probably not a logic component

 4️⃣ Avoid Logic in Styled-Components:
    - Keep all behavior/logic (like state, events) in React components only

 5️⃣ Add Inline Comments:
    // ✅ React Component
    function Card() { ... }

    // ✅ Styled Component
    const StyledCard = styled.div` ... `;

 🎯 Goal: Keep your logic components and style components clean and clearly named
*/
