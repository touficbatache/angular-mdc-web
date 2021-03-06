import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed, fakeAsync, flush} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {dispatchFakeEvent} from '@angular-mdc/web/testing';

import {
  MdcFormField,
  MdcFormFieldModule,
} from './index';
import {MdcCheckboxModule} from '@angular-mdc/web/checkbox';
import {MdcSwitchModule} from '@angular-mdc/web/switch';
import {MdcRadioModule} from '@angular-mdc/web/radio';

describe('MdcFormField', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MdcFormFieldModule,
        MdcCheckboxModule,
        MdcRadioModule,
        MdcSwitchModule
      ],
      declarations: [
        SimpleTest,
      ]
    });
    TestBed.compileComponents();
  }));

  describe('basic behaviors', () => {
    let testDebugElement: DebugElement;
    let testNativeElement: HTMLElement;
    let testInstance: MdcFormField;
    let testComponent: SimpleTest;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();

      testDebugElement = fixture.debugElement.query(By.directive(MdcFormField));
      testNativeElement = testDebugElement.nativeElement;
      testInstance = testDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('#should contain mdc-form-field--align-end class', () => {
      testComponent.alignEnd = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList).toContain('mdc-form-field--align-end');
    });

    it('#should contain ngx-mdc-form-field--fluid class', () => {
      testComponent.fluid = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList).toContain('ngx-mdc-form-field--fluid');
    });

    it('#should activate ripple on input', fakeAsync(() => {
      dispatchFakeEvent(testInstance.label as Element, 'click');
      fixture.detectChanges();
      flush();
    }));
  });
});

@Component({
  template: `
    <mdc-form-field [alignEnd]="alignEnd" [fluid]="fluid">
      <mdc-checkbox></mdc-checkbox>
      <label>My label</label>
    </mdc-form-field>
    <mdc-form-field>
      <mdc-radio></mdc-radio>
      <label>My label</label>
    </mdc-form-field>
    <mdc-form-field>
      <mdc-switch></mdc-switch>
      <label>My label</label>
    </mdc-form-field>
    <mdc-form-field>
      <mdc-switch></mdc-switch>
    </mdc-form-field>
    <mdc-form-field>
      <mdc-switch></mdc-switch>
      <span>not a label</span>
    </mdc-form-field>
    <mdc-form-field></mdc-form-field>
  `,
})
class SimpleTest {
  alignEnd: boolean = false;
  fluid: boolean;
}
