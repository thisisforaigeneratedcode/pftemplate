import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Tech Company Inc.',
    position: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications and mentoring junior developers.',
    achievements: [
      'Architected and built a microservices platform serving 100k+ users',
      'Reduced application load time by 40% through optimization',
      'Mentored 5 junior developers and conducted code reviews',
    ],
  },
  {
    company: 'Startup Studio',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed multiple client projects from concept to deployment.',
    achievements: [
      'Built 10+ production applications using React and Node.js',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with designers to create pixel-perfect UIs',
    ],
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    description: 'Created responsive, accessible websites for diverse clients.',
    achievements: [
      'Developed 20+ responsive websites with 98% client satisfaction',
      'Improved website performance scores to 90+ on Lighthouse',
      'Introduced component-based architecture to the team',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-elegant"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
