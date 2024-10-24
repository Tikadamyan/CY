describe('Test DemoQA page', () => {
    it('visits the page', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('eq', 'https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Jhon')
        cy.get('#lastName').type('Smith')
        cy.get('#userEmail').type('jhonsmith@gmail.com')

        cy.get('#genterWrapper').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).eq(0).check({ force: true }).should('be.checked')
            cy.wrap(radioButtons).eq(1).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).should('not.be.checked')
        })

        cy.get('#userNumber').type(3741111110)

        function selectBirthday(dateString) {
            const date = new Date(dateString);
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();

            cy.get('#dateOfBirthInput').click();
            cy.get('.react-datepicker__year-select').select(year.toString());
            cy.get('.react-datepicker__month-select').select(month);
            cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
            const formattedDate = date.toLocaleDateString('en-US');
        }
        selectBirthday('1994-05-22');

        function selectSubject(subjectName) {
            cy.get('#subjectsContainer').click();
            cy.get('.subjects-auto-complete__input').type(subjectName).should('be.visible');
            cy.get('.subjects-auto-complete__option').contains(subjectName).click();
        }
        selectSubject('Math');

        cy.get('[id^="hobbies-checkbox"]').each((checkbox, index) => {
            if (index < 2) {
                cy.wrap(checkbox).check({ force: true })
            }
        })

        cy.get('#currentAddress').type('Baker Street 21')
        cy.get('#state').click()
        cy.get('#react-select-3-option-2').should('be.visible').then(option => {
            cy.wrap(option).click()
        })
        cy.get('#state').should('contain.text', 'Haryana')

        cy.get('#city').click()
        cy.get('#react-select-4-option-0').should('be.visible').then(option2 => {
            cy.wrap(option2).click()
        })
        cy.get('#city').should('contain.text', 'Karnal')

        cy.get("#submit").click()
        cy.get('.modal-content').should('be.visible').then((modal) => {
            cy.wrap(modal).should('contain.text', 'Thanks for submitting the form')
        })
        cy.get('#closeLargeModal').click({ force: true })
        cy.get('.practice-form-wrapper').should('contain.text', 'Practice Form')
    })
})
