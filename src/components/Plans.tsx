
import React from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const plans = [{
  id: 1,
  name: 'Plano Essencial',
  price: '99,99',
  description: 'Ideal para microempresas ou empreendedores individuais que buscam serviços básicos de contabilidade.',
  features: [{
    text: 'Emissão de até 10 notas fiscais mensais',
    included: true
  }, {
    text: 'Declaração mensal de impostos',
    included: true
  }, {
    text: 'Suporte contábil por e-mail',
    included: true
  }, {
    text: 'Relatório financeiro básico mensal',
    included: true
  }, {
    text: 'Acompanhamento básico de tributos',
    included: true
  }, {
    text: 'Consultoria contábil trimestral',
    included: false
  }, {
    text: 'Otimização fiscal',
    included: false
  }, {
    text: 'Atendimento personalizado',
    included: false
  }],
  popular: false,
  delay: '0s',
  color: 'bg-neutral-50'
}, {
  id: 2,
  name: 'Plano Business',
  price: '269,99',
  description: 'Perfeito para pequenas empresas que necessitam de suporte contábil mais abrangente e relatórios detalhados.',
  features: [{
    text: 'Emissão de até 30 notas fiscais mensais',
    included: true
  }, {
    text: 'Declaração mensal de impostos e encargos trabalhistas',
    included: true
  }, {
    text: 'Suporte contábil por e-mail e telefone',
    included: true
  }, {
    text: 'Relatório financeiro detalhado mensal',
    included: true
  }, {
    text: 'Acompanhamento mensal de tributos',
    included: true
  }, {
    text: 'Consultoria contábil trimestral',
    included: true
  }, {
    text: 'Otimização fiscal',
    included: true
  }, {
    text: 'Atendimento personalizado',
    included: false
  }],
  popular: true,
  delay: '0.1s',
  color: 'bg-amber-50'
}, {
  id: 3,
  name: 'Plano Enterprise',
  price: '699,99',
  description: 'Solução completa para empresas que requerem acompanhamento contábil contínuo e consultoria estratégica.',
  features: [{
    text: 'Emissão ilimitada de notas fiscais',
    included: true
  }, {
    text: 'Declaração mensal de impostos e encargos trabalhistas',
    included: true
  }, {
    text: 'Suporte contábil ilimitado por e-mail, telefone e chat',
    included: true
  }, {
    text: 'Relatórios financeiros completos mensais e trimestrais',
    included: true
  }, {
    text: 'Acompanhamento estratégico de tributos',
    included: true
  }, {
    text: 'Consultoria contábil mensal e planejamento financeiro',
    included: true
  }, {
    text: 'Otimização fiscal avançada',
    included: true
  }, {
    text: 'Atendimento personalizado prioritário',
    included: true
  }],
  popular: false,
  delay: '0.2s',
  color: 'bg-neutral-50'
}];

const Plans = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="plans" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Planos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções contábeis completas para empresas de todos os tamanhos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in",
                plan.popular ? "plan-card-popular" : "plan-card"
              )}
              style={{ animationDelay: plan.delay }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className={cn(
                      "p-1 rounded-full mr-3 mt-0.5 flex-shrink-0",
                      feature.included ? "bg-primary/10" : "bg-gray-100"
                    )}>
                      {feature.included ? (
                        <Check className="text-primary" size={14} />
                      ) : (
                        <X className="text-gray-400" size={14} />
                      )}
                    </div>
                    <span className={cn(
                      "text-sm",
                      feature.included ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-3 rounded-md font-medium transition-all",
                plan.popular 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              )}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
