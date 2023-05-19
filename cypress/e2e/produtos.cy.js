
/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first() pegar o primeio item da lista
        //.last()  pegar o último item da lista
        //.last() 
        //.eq(3)
        .contains('Teton Pullover Hoodie')
        .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        
        cy.get('[class="product-block grid"]')
           .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });

    it.('Deve adicionar produtos ao carrinho - Usando comando customizado', () =>{
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XL', 'Green', quantidade)

    });
});

