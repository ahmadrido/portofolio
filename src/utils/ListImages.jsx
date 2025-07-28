import throphy from '../assets/images/trophy.png'
import medal from '../assets/images/medal.png'
import skill from '../assets/images/skill.png'
import messageMail from '../assets/images/messageMail.png'
import charinfo from '../assets/images/charinfo.png'
import react from '../assets/images/react.png'
import js from '../assets/images/js.png'
import php from '../assets/images/php.png'
import sql from '../assets/images/sql.png'
import java from '../assets/images/java.png'
import creative from '../assets/images/creative.png'
import problem from '../assets/images/problem.png'
import teamwork from '../assets/images/teamwork.png'
import musicon from '../assets/images/musicon.png'
import musicoff from '../assets/images/musicoff.png'

const ListImages = [
    { name: 'Char Info', src: charinfo },
    { name: 'Achivment', src: medal },
    { name: 'Abilities', src: skill },
    { name: 'Message', src: messageMail },
    { name: 'Creative', src: creative },
    { name: 'Problem Solving', src: problem },
    { name: 'Team Work', src: teamwork },
    { name: 'Music On', src: musicon },
    { name: 'Music Off', src: musicoff },
]


const ImagesSkill = [
    { name: 'React JS', src: react, shoot: false},
    { name: 'JavaScript', src: js, shoot: false},
    { name: 'PHP', src: php, shoot: false},
    { name: 'SQL', src: sql, shoot: false},
    { name: 'Java', src: java, shoot: false},
]

export { ListImages, ImagesSkill }