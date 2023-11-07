// Constants for the site

import { Bot, BrainCircuit, BrainCog, CircuitBoard } from "lucide-react";
import { facebook, twitter } from "../../public/icons";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const heroSection = 
    {
    title: "Scheldt LLC",
    subtitle: "Let's build your next big AI project together!",
    paragraphOne: "Have a great idea for an AI project? Let's chat and make it a reality! Idea to MVP in 90 days.",
    paragraphTwo: "We create tailor-made applications and systems that are designed and developed to meet specific business needs using artificial intelligence technologies. Our solutions are crafted to address unique challenges and opportunities within an organization, incorporating machine learning, deep learning, and other AI techniques."
    }

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

// export const statistics = [
//     { value: '1k+', label: 'Brands' },
//     { value: '500+', label: 'Shops' },
//     { value: '250k+', label: 'Customers' },
// ];

export const services = [
    {
        icon: Bot,
        name: "AI-Chatbot Development",
        desc: "We design, build, integrate and implement intelligent chatbots that engagne with users, understand their queries, and provide relevant responses using Advanced AI technologies",
    },
    {
        icon: BrainCircuit,
        name: "Hi Nury!",
        desc: "We design, build, integrate and implement intelligent chatbots that engagne with users, understand their queries, and provide relevant responses using Advanced AI technologies",
    },
    {
        icon: BrainCog,
        name: "AI-Chatbot Development",
        desc: "We design, build, integrate and implement intelligent chatbots that engagne with users, understand their queries, and provide relevant responses using Advanced AI technologies",
    },
    {
        icon: CircuitBoard,
        name: "AI-Chatbot Development",
        desc: "We design, build, integrate and implement intelligent chatbots that engagne with users, understand their queries, and provide relevant responses using Advanced AI technologies",
    },
    
];

export const getStarted = [
    {
        number: 1,
        title: "Contact Us",
        desc: "Contact us to schedule a meeting with our experts to discuss your requirements in detail.",
    },
    {
        number: 2,
        title: "Free Consultation",
        desc: "Schedule a Consultation with Our Team to Assess Your Project's Feasibility and Embark on a Journey to Turn Concepts into Tangible Innovations",
    },
    {
        number: 3,
        title: "Define Scope",
        desc: "Get a Detailed Proposal of the Project with Cost and Timeline Estimates and a List of Deliverables to be Produced",
    },
    {
        number: 4,
        title: "Project Start",
        desc: "Launch your project with our team of experts and get regular updates on the progress of your project.",
    },
]


// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
];