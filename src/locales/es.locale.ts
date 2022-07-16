import { IPosibleLocals } from "../utils/types";

export const eslocal: IPosibleLocals = {
    locale: "es-ES",
    role: "Desarrollador Web",
    downloadCV: "Descargar Curriculum",
    about: "Sobre mi",
    resume: "Curriculum",
    month: "mes",
    year: "año",
    months: "meses",
    years: "años",
    projects: "Proyectos",
    aboutView: {
        contact: "Contacto",
        title: "<span class='text-primary dark:text-lightText'> Sobre</span> Mi",
        description:
            `
            <p>
                Apasionado de las nuevas tecnologías
                con experiencia construyendo
                aplicación web full-stack, diseñando
                arquitecturas cloud, microservicios,
                trabajo con contenedores y tecnologias
                serverless. Experiencia trabajando con
                metodologías SCRUM y KANBAN.
            </p>
            <br/>
            <p>
                Autonomía, trabajo en equipo y
                adaptación al cambio, en busca de
                nuevos retos, resolución de problemas,
                aprendizaje y mejora continua, especial
                interés enfocado a incremento de
                conocimientos y habilidades cloud.
            </p>
        `,
        aboutAnswers: {
            degree: "Ing. Informática",
            residence: "Santander, España",
            nationality: "Salvadoreño",
            movility: "Disponible",
            coffee: "Si"
        },
        university: "UNIVERSIDAD EUROPEA DEL ATLÁNTICO",
        age: "Edad",
        degree: "Titulación",
        nationality: "Nacionalidad",
        residence: "Residencia",
        movility: "Movilidad",
        coffee: "Café",
        certificationSubTitle: "Certificaciones",
        phone: "Móvil",
        educationSubTitle: "Educación",
        languagesSubTitle: "Idiomas"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> Mis</span> Proyectos",
        projectCategories: {
            All: "Todas",
            Frontend: "Frontend",
            Vscode: "Vscode",
            npm: "npm"
        },
        projects: [
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra chat francais OOOOOMG",
                description: "hay bro"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra asdsdfsdf chat francais OOOOOMG",
                description: "hayxd  bro"
            },
            {
                categories: ["npm"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "tbin-tree",
                description: "Aca va el tbin bro"
            },
            {
                categories: ["Frontend", "Vscode"],
                technologies: ["Vuejs", "mangote", "SCSS"],
                title: "La revolucion industrial fue xd",
                description: "hay bro"
            }
        ]
    },
    resumeView: {
        title: "<span class='text-primary dark:text-lightText'> Mi</span> Experiencia",
        places: [
            {
                place: {
                    name: "UNIVERSIDAD EUROPEA DEL ATLÁNTICO",
                    logoUrl: "logo_uneatlantico.svg"
                },
                roles: [
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Análisis y Desarrollo de componentes web y SPA en reactjs y vuejs.
                                </li>
                                <li>
                                    Análisis, Diseño y desarrollo de APIs REST con Node.js
                                </li>
                                <li>
                                    Diseño de arquitectura de proyectos web y microservicios cloud native.
                                </li>
                                <li>
                                    Automatización de tareas.
                                </li>
                                <li>
                                    Contenerización de aplicación y entornos de desarrollo con Docker y Docker Compose
                                </li>
                            </ul>
                        `,
                        period: ["December 1, 2019", "now"], // from december to nowadays
                        role: "Desarrollador Web",
                        technologies: ["Reactjs", "Typescript", "Vuejs", "AWS", "Nuxt", "Docker", "GCP"]
                    },
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Maquetación de elementos y paginas Web a
                                    partir de prototipos, aplicación de estilos
                                    responsivos e interactividad.
                                </li>
                            </ul>
                        `,
                        period: ["September 1, 2018", "November 30, 2019"],
                        role: " Maquetador Web",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};