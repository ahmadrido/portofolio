
const language = [
    {
        icon: "fa-brands fa-html5",
        title: "HTML5"
    },
    {
        icon: "fa-brands fa-css3-alt",
        title: "CSS3"
    },
    {
        icon: "fa-brands fa-js",
        title: "JavaScript"
    },
    {
        icon: "fa-brands fa-react",
        title: "React"
    },
    {
        icon: "fa-brands fa-bootstrap",
        title: "Bootstrap"
    },
    {
        icon: "fa-brands fa-node-js",
        title: "Node.js"
    },
    {
        icon: "fa-brands fa-php",
        title: "PHP"
    },
    {
        icon: "fa-brands fa-java",
        title: "Java"
    },
    {
        icon: "fa-brands fa-python",
        title: "Python"
    }

]

const languageSkill = () => {
    return (
        <div className="programing-languages">
            {language.map((item, index) => (
                <div key={index}>
                    <i className={item.icon} data-bs-toggle="tooltip" data-bs-placement="top" title={item.title}></i>
                </div>
            ))}
        </div>
    );
};

export default languageSkill;