
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [{
  id: 1,
  name: 'Maria Silva',
  role: 'Diretora',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  delay: '0s'
}, {
  id: 2,
  name: 'Joel Antônio',
  role: 'Contador',
  image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  delay: '0.1s'
}, {
  id: 3,
  name: 'Jéssica Souza',
  role: 'Contadora',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
  delay: '0.2s'
}, {
  id: 4,
  name: 'Luiz Ricardo',
  role: 'Designer',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  delay: '0.3s'
}];

const Team = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Equipe
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Profissionais Especializados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe é formada por profissionais experientes e apaixonados por automóveis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: member.delay }}
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {member.role}
              </p>
              <div className="flex justify-center gap-2">
                <button className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin size={16} />
                </button>
                <button className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
