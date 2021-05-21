describe('Pizza Form',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const specialInput = () => cy.get('input[name=special]')
    const sizeInput = () => cy.get('select[id=size-dropdown]')
    const sauceInput = () => cy.get('input[data-test= radio]')
    const checkboxInput1 = () => cy.get('input[name=pepperoni]')
    const checkboxInput2 = () => cy.get('input[name=onions]')
    const submitBtn = () => cy.get('button[id=order-button]')
    const notRealBtn = ()=> cy.get('button[id=notReal]')

    it('Sanity check',()=>{
        expect(2+2).to.equal(4)
        expect(2+4).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('Checking for elements',() =>{
        nameInput().should('exist')
        specialInput().should('exist')
        sizeInput().should('exist')
        sauceInput().should('exist')
        checkboxInput1().should('exist')
        checkboxInput2().should('exist')
        submitBtn().should('exist')
        notRealBtn().should('not.exist')
    })

    describe('Text input',()=>{
        it('typing in the text boxes',()=>{
            nameInput()
                .should('have.value', '')
                .type('This is for a name')
                .should('have.value', 'This is for a name')
            specialInput()
                .should('have.value','')
                .type('Nothing special')
                .should('have.value','Nothing special')
        })
    })
    describe('Checkboxes',()=>{
        it('picking the checkbox',()=>{
            checkboxInput1()
                .should('not.be.checked')
                .click()
                .should('be.checked')
            checkboxInput2()
                .should('not.be.checked')
                .click()
                .should('be.checked')
        })
    })
    describe('Submit button and submitting',()=>{
        it('submit Button',()=>{
            submitBtn().should('be.disabled')
        })
        it('Submitting the form',()=>{
            nameInput().type('Robert')
            sizeInput()
                .select('small')
                .should('have.value','small')
            sauceInput().click()
            checkboxInput1().click()
            specialInput().type('Nothing')
            submitBtn()
                .should('not.be.disabled')
                .click()
            
            
            
        })
    })
})