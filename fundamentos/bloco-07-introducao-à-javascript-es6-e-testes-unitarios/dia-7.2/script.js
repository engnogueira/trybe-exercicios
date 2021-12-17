const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const objeto = student2 => {
      for (let key in student2) {
        console.log(`Nome da habilidade :${key},  Valor da habilidade: ${student2[key]}`);
      }
    };
 objeto(student2);