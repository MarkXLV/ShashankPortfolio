import { Briefcase, GraduationCap, Code } from 'lucide-react';

export default function About() {
  const skills = {
    'Languages': ['Java', 'Python', 'C/C++'],
    'Frameworks/Libraries': ['Spring Boot', 'FastAPI', 'Django', 'TensorFlow', 'Scrapy', 'Next.js'],
    'DevOps/Cloud': ['AWS', 'Docker', 'Kubernetes', 'Kubeflow', 'Apache Airflow', 'Jenkins', 'CI/CD'],
    'Databases': ['PostgreSQL'],
    'Tools': ['Git', 'Memcached', 'Postman', 'Jupyter Notebook', 'Grafana'],
    'ML & AI': ['TensorFlow', 'Scrapy', 'Kubeflow', 'MLOps', 'Apache Airflow']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A brief overview of my professional journey, skills, and what drives me.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in" style={{ animationDelay: '0ms' }}>
              <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p>
                  I am a results-driven Software Engineer with 1.5 years of experience specializing in building high-performance backend systems and MLOps pipelines. My expertise lies in delivering scalable, reliable software solutions and integrating AI capabilities into production environments.
                </p>
                <p>
                  Currently, I am a Software Engineer at Deutsche Bank, where I focus on building high-throughput microservices architectures and optimizing data processing pipelines. My work involves GraphQL gateways, REST APIs, and ETL services using Apache Airflow, significantly improving data exchange and accuracy. I've also enhanced application responsiveness and reduced system outages by strengthening core infrastructure with technologies like Memcached and Java's ExecutorService.
                </p>
                <p>
                  Previously, I interned at AIDASH as a Machine Learning Engineer, where I developed custom 
                  Python SDKs and automated ML model monitoring systems.
                </p>
                <p>
                  I graduated from the Indian Institute of Information Technology, Allahabad with a B.Tech 
                  in Electronics & Communication, maintaining a strong GPA of 8.85/10.0.
                </p>
              </div>
            </div>
            <div className="slide-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl font-bold text-white mb-6">Skills Matrix</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={category} style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-xl font-semibold text-white mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span 
                          key={skill} 
                          className="px-4 py-2 bg-gray-800/50 text-blue-300 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
