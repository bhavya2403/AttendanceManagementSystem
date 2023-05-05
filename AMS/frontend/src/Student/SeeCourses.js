import './SeeCourses.css'
import React from 'react'
import Collapsible from './Collapsible'
import Navbar from './Navbar'


const courses = [
    {
        id: 'c1',
        courseName: 'Software Engineering',
        professorName: 'Saurabh Tiwari',
        content: 'The Software Engineering course introduces the basic principles, practices, tools and techniques required to engineer large complex software systems. The main objective is to understand and learn how complexity and change are engineered during large software development.',
    },
    {
        id: 'c2',
        courseName: 'Human Computer Interaction',
        professorName: 'Kalyan Sasidhar',
        content: 'Designing of things'
    },
    {
        id: 'c3',
        courseName: 'Introduction to Robotics',
        professorName: 'Tapas Kumar Maiti',
        content: 'Learn about robots.'
    },
    {
        id: 'c4',
        courseName: 'Introduction to ICT',
        professorName: 'Dr. Anil Roy',
        content: 'This course is designed to provide students a contextual understanding of different facets of ICT along with the practical exposure to basic engineering tools.',
    },
        
        {
        id: 'c5',
        courseName: 'Language and Literature',
        professorName: 'Dr. Shefali Jha',
        content: 'This course introduces students to the study of the English language and literature at the undergraduate level. It follows a two-pronged approach: first, teaching the English language through literature; secondly, introducing the students to the world of literature and teaching them strategies of reading and comprehending.'
        },
        
        {
        id: 'c6',
        courseName: 'Calculus',
        professorName: 'Dr. Nabin Sahu',
        content: 'This course aims at building an advanced understanding of calculus in single, multi, and complex variables. This section also includes first-order ordinary differential equations (ODE) and higher-order ODEs.'
        },
        
        {
        id: 'c7',
        courseName: 'Introduction to Programming',
        professorName: 'Dr. Bakul Gohel',
        content: 'This course aims to introduce problem solving techniques using C programming to help the students to develop analytical and logical skills. The topics of this course include problem-solving techniques, flow charts, algorithms development, and pseudo codes.'
        },
        
        {
        id: 'c8',
        courseName: 'Programming Lab',
        professorName: 'Dr. Manish Khare',
        content: 'This course deals with the practical aspects of the Introduction to Programming course. It provides hands-on practical knowledge on programming exercises using tools like editors, compilers, and open-source coding platforms.'
        },
        
        {
        id: 'c9',
        courseName: 'Basic Electronic Circuits',
        professorName: 'Dr. Anjan Ghosh',
        content: 'The objective of this course is to discuss basic concepts of electrical and electronic circuits and components. In a nutshell, it contains different circuit laws, network theorems, the concept of a linear time-invariant system, different sources, semiconductor diode, transistors, operational amplifier, natural and forced response, sinusoidal steady-state analysis, active & passive filters, and transformer.'
        },
        
        {
        id: 'c10',
        courseName: 'Discrete Mathematics',
        professorName: 'Dr. Manish Gupta',
        content: 'Discrete Mathematics covers the concept of mathematical proofs, concrete proof techniques, and the use of mathematical language to make precise statements and draw accurate and insightful conclusions on discrete mathematical structures of a wide variety.'
        },
        
        {
        id: 'c11',
        courseName: 'Digital Logic and Computer Organization',
        professorName: 'Dr. Vinay Shrinivas',
        content: 'This course provides an introduction to the design and implementation of digital circuits and microprocessors. Design methodology using both discrete components and hardware description languages are covered in the lab component of the course.'
        },
        
        {
        id: 'c12',
        courseName: 'Data Structures',
        professorName: 'Dr. Priyanka Singh',
        content: 'The course aims to introduce the concept of data structures, and their indispensability in implementing algorithms and also how they aid in improving performance. An extensive coverage of the well-known and important data structures such as arrays, linked lists, queues, stacks, hash tables, binary search trees, AVL trees, red-black trees, 2-3-4 trees, heaps, along with associated routines/algorithms such as dictionary operations, order statistics, sorting will constitute the contents of the course.'
        },
        
        {
        id: 'c13',
        courseName: 'Data Structures Lab using OOPS',
        professorName: 'Dr. Archana Nigam',
        content: 'The aim of this course is to provide the students practical hands-on exposure in implementing different data structures from scratch using the paradigm of Object Oriented Programming. The preferred programming language is C++. This practical course supplements and runs in sync with its theory counterpart "Data Structures".'},
        
        {
        id: 'c14',
        courseName: 'Electromagnetic Theory',
        professorName: 'Dr. Arnab Ray',
        content: 'The course is designed to introduce the fundamentals of electromagnetic waves and its propagation in a medium. It introduces the tools of vector calculus, the various differential operators and the divergence and the Stokes’ theorem. Electricity and magnetism is introduced.'
        },
        
        {
        id: 'c15',
        courseName: 'Science, Technology, Society',
        professorName: 'Dr. Shefali Jha',
        content: 'This course introduces students to key questions in the philosophy, history and sociology of science and technology in our times. Science and Technology Studies (STS) is a growing field of interdisciplinary studies that seeks to understand how science and technology shape human lives and livelihoods and how society and culture, in turn, shape the development of science and technology.'
        },
        
        {
        id: 'c16',
        courseName: 'Linear Algebra',
        professorName: 'Dr. Aditya Tatu',
        content: 'The course introduces students to the Mathematical structure of Vector Spaces, and associated concepts like Subspaces, Dimensions, Linear Transformations and their Matrix representations, Invariant Subspaces, Inner products and Norms. Some tools from Matrix algebra are also covered, for example, Solutions of linear equations, Rank of Matrices, Linear least squares, Eigen-decomposition, and Singular Value decomposition.'        },
        
        {
        id: 'c17',
        courseName: 'Signals and Systems',
        professorName: 'Dr. Avik Hati',
        content: 'The main focus of this course is to introduce different types of signals and systems covering different signal properties such as periodicity, energy, power, etc., and different system properties such as linearity, time-invariance,  causality, and stability. It discusses the methods to analyze signals with the help of the Fourier series and Fourier transform.'
        },
        
        {
        id: 'c18',
        courseName: 'Database Management System',
        professorName: 'Dr. Minal Bhise',
        content: 'This course teaches use of Database Management System (DBMS) to understand and solve a wide range of information storage and query processing problems. It is a lab-intensive course, where students will be working on a series of assignments         where they learn to apply concepts discussed during the lectures to different aspects of database design and querying.'
        },
        
        {
        id: 'c19',
        courseName: 'Principles of Economics',
        professorName: 'Dr. Gaurav Kumar',
        content: 'This is a foundation course which includes elements of both Micro and Macroeconomics and aims to develop an understanding of basic economic theory and its relation to current issues of the economy.'        },
        
        {
        id: 'c20',
        courseName: 'Computer Networks',
        professorName: 'Dr. P S Kalyan Sasidhar',
        content: 'This course will cover the fundamental principles of wired computer networks focusing on the Internet architecture, protocols, and implementation. The objective is to provide an understanding of how the Internet works, what is a network application, the client server model and many other concepts.'
        },
]
function SeeCourses(){
    console.log(window.token);
    return (
        <>
        <Navbar/>
        <div className="grid">
            {courses.map(course =>(
                <Collapsible key={course.id} 
                id={course.id} 
                courseName={course.courseName} 
                professorName={course.professorName} 
                content={course.content} />
            ))}
        </div>
        </>
    )
}


export default SeeCourses