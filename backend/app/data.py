from .models import Resume, Experience, Project, Education, SkillCategory

resume_data = Resume(
    name="S. Abhijit Rao",
    title="Full Stack & AI Developer",
    contact={
        "phone": "+91 9985727779",
        "email": "pesar.abhijit2003@gmail.com",
        "linkedin": "https://www.linkedin.com/in/abhijit79",
        "github": "https://github.com/Abhijit7979"
    },
    summary="Motivated B.Tech (Artificial Intelligence) graduate with hands-on experience building production-style AI and software solutions. Proficient in Python and SQL, and experienced with LLM frameworks, RAG pipelines, vector databases (ChromaDB), FastAPI, and React. Demonstrated impact through internships and projects—reduced manual video-editing effort using automated RAG flows and earned “Intern of the Month” at Prodigal AI—eager to contribute technical skills and collaborative problem solving to a growth-focused engineering team.",
    experience=[
        Experience(
            company="Prodigal AI",
            role="Agentic AI Intern",
            duration="Feb 2025 – June 2025",
            location="Remote, India",
            description=[
                "Worked on Dhanur AI, a cutting-edge video editing automation platform by Prodigal AI that transforms raw user video into polished YouTube/Shorts-ready content using Langchain framework.",
                "Implemented Retrieval-Augmented Generation (RAG) pipelines integrated with vector databases for intelligent context retrieval of b-roll, filters and transition segmentation using ChromaDB.",
                "Reduced manual editing time significantly through intelligent automation, enhancing creator productivity.",
                "Awarded Intern of the Month in April 2025 for exceptional performance and innovation."
            ]
        )
    ],
    projects=[
        Project(
            title="Multi-Agent Financial Chatbot System",
            description="Developed a modular multi-agent system using open-source LLMs (LLaMA 3.1, DeepSeek) with the Phidata framework, orchestrated via Groq inference APIs for high-performance response times. Engineered a finance-focused chatbot capable of real-time stock data retrieval, web summarization, and analytics by integrating specialized agents (Finance Agent, Web Agent) using tools like YFinance, DuckDuckGo, and custom utilities.",
            technologies=["LLaMA 3.1", "DeepSeek", "Phidata", "Groq API", "YFinance", "DuckDuckGo"],
            github_link="https://github.com/Abhijit7979"
        ),
        Project(
            title="Natural Language→SQL Agent",
            description="A natural-language→SQL conversational agent using LangGraph and an LLM to generate syntactically-correct SQL from plain-English questions and execute them against a local SQLite database. Implemented a 3-node graph (write query→execute query→generate answer), plus a Streamlit UI that shows generated SQL and raw results.",
            technologies=["LangGraph", "LLM", "SQLite", "Streamlit"],
            github_link="https://github.com/Abhijit7979"
        ),
        Project(
            title="NASA-Turbofan-Jet-Engine",
            description="Developed a machine learning model to predict the remaining useful life (RUL) of a turbofan jet engine using data from NASA’s open-source dataset. Implemented data preprocessing, feature engineering, and model training techniques, optimizing the model with algorithms like Random Forest to achieve accurate RUL predictions. Collaborated with a team during a college hackathon.",
            technologies=["Machine Learning", "Random Forest", "Data Preprocessing"],
            github_link="https://github.com/Abhijit7979"
        )
    ],
    skills=[
        SkillCategory(
            category="Languages",
            skills=["Python", "SQL"]
        ),
        SkillCategory(
            category="Technologies/Frameworks",
            skills=["LangChain", "LangGraph", "Langsmith", "Phidata", "FastAPI", "Streamlit", "Scikit-Learn", "TensorFlow", "OpenAI APIs", "ChromaDB", "Hugging Face"]
        ),
        SkillCategory(
            category="Concepts",
            skills=["RAG", "API development", "Model Evaluation", "Git", "Data Preprocessing", "Debugging", "Multi-Agent Workflows"]
        ),
        SkillCategory(
            category="Operating Systems",
            skills=["Mac OS", "Linux", "Windows"]
        ),
        SkillCategory(
            category="Soft Skills",
            skills=["Collaborative Teamwork", "Adaptability", "Creativity", "Problem Solving"]
        )
    ],
    education=[
        Education(
            institution="Mahindra University",
            degree="Bachelor of Technology in Artificial Intelligence",
            duration="August 2021 - June 2025",
            location="Hyderabad, India",
            coursework=["Data Structures", "Object-Oriented Programming", "Web Development (Node.js, React)", "Machine Learning", "Cloud Computing"]
        )
    ]
)
