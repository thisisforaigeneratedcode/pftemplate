import { Card } from '@/components/ui/card';
import { Code2, Palette, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices and design patterns.',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Building fast, optimized applications that deliver exceptional experiences.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm a passionate developer with [X] years of experience building web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-elegant group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or sharing my knowledge through blog posts and mentoring. I believe in continuous learning
              and staying up-to-date with the latest industry trends.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
