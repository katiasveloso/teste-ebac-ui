/// <reference types="cypress" />

context('Funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        
    });

    afterEach(() => {
        cy.screenshot
        
    });
    
    
    
    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Aluno')
       

    })

    it('Deve exibir uma mensagem de erro ao inserir o usuario', () => {
        cy.get('#username').type('aluno_ebac@teste.com.br')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    })

    it('Deve exibir uma mensagem de erro ao inserir a senha inválidos', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste0@teste.com')
        cy.get('.woocommerce-form > .button').click()

       
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?' )
       

    })


    

})

    
    
