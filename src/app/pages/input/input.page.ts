import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

    reactiveForm: FormGroup;
    isValid = false;

    constructor(private formBuilder: FormBuilder) {
        this.reactiveForm = formBuilder.group({
            email: ['', [Validators.required, Validators.pattern("^(.+)@(.+)$")] ],
            password: ['', Validators.required]
        })
        this.isValid = this.reactiveForm.status === "INVALID" ? false : true;
    }

    ngOnInit() {

        this.reactiveForm.valueChanges.subscribe(res => {
            if(this.reactiveForm.status === "VALID") {
                this.isValid = true;
            }else{
                this.isValid = false;
            }
        })

    }

    handleSubmit() {
        console.log(this.reactiveForm.value)
    }

}
