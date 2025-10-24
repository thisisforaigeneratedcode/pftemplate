import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, teams, and advanced filtering.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, charts, and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-elegant group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
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
