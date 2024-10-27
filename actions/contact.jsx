export const EmailTemplate = ({
    firstName,
    lastName,
    institution,
    email,
    phone,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
        <h1>Bienvenue, {firstName} {lastName} !</h1>
        <p>Merci de nous avoir contactés.</p>

        <h2>Voici les informations que vous nous avez transmises :</h2>

        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><strong>Nom :</strong> {firstName} {lastName}</li>
            <li><strong>Établissement :</strong> {institution}</li>
            <li><strong>Email :</strong> {email}</li>
            <li><strong>Téléphone :</strong> {phone}</li>
        </ul>

        <p>Nous vous recontacterons bientôt à cette adresse email : <strong>{email}</strong>.</p>

        <p>Merci encore et à bientôt !</p>
    </div>
);
