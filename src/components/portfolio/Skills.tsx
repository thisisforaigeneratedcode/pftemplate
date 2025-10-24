import { Card } from '@/components/ui/card';

export interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'AWS', level: 65, category: 'DevOps' },
];

const categories = ['Frontend', 'Backend', 'Database', 'DevOps'];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card key={category} className="p-6 bg-card/50 backdrop-blur border-border">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
