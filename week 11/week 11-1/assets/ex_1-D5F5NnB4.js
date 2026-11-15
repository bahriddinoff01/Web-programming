import{j as e,m as n}from"./mount-KE_vqTTO.js";const t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><rect width='80' height='80' fill='%23ffe066'/><circle cx='40' cy='31' r='14' fill='%2314121f'/><path d='M14 74c3-16 13-24 26-24s23 8 26 24' fill='%2314121f'/></svg>";function l({name:a,role:s,email:i,avatarUrl:r=t}){const o=r===t;return e.jsxs("article",{className:"profile-card",children:[e.jsx("img",{src:r,alt:o?"Default profile picture":`Photo of ${a}`,width:"80",height:"80"}),e.jsx("h3",{children:a}),e.jsx("p",{children:s}),e.jsx("a",{href:`mailto:${i}`,children:i})]})}function c(){return e.jsxs("div",{className:"row",children:[e.jsx(l,{name:"Abdulazizbek",role:"Computer Engineering student",email:"202537225@gachon.ac.kr",avatarUrl:"../../main%20container/self%20img.jpg"}),e.jsx(l,{name:"Web Programming TA",role:"Teaching assistant",email:"ta@example.com"})]})}const m=`// Default picture, used when no avatarUrl is passed
const PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>" +
  "<rect width='80' height='80' fill='%23ffe066'/><circle cx='40' cy='31' r='14' fill='%2314121f'/>" +
  "<path d='M14 74c3-16 13-24 26-24s23 8 26 24' fill='%2314121f'/></svg>";

function ProfileCard({ name, role, email, avatarUrl = PLACEHOLDER }) {
  const isDefault = avatarUrl === PLACEHOLDER;

  return (
    <article className="profile-card">
      <img
        src={avatarUrl}
        alt={isDefault ? "Default profile picture" : \`Photo of \${name}\`}
        width="80"
        height="80"
      />
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={\`mailto:\${email}\`}>{email}</a>
    </article>
  );
}

export default function App() {
  return (
    <div className="row">
      {/* avatarUrl is passed, so my photo is used */}
      <ProfileCard
        name="Abdulazizbek"
        role="Computer Engineering student"
        email="202537225@gachon.ac.kr"
        avatarUrl="../../main%20container/self%20img.jpg"
      />

      {/* no avatarUrl, so the default picture is used */}
      <ProfileCard
        name="Web Programming TA"
        role="Teaching assistant"
        email="ta@example.com"
      />
    </div>
  );
}
`;n(c,m);
