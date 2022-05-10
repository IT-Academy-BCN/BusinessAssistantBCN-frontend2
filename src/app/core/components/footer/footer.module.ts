
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer.component';

// CDK
import { LayoutModule } from '@angular/cdk/layout';

//MATERIAL
import { MatGridListModule } from '@angular/material/grid-list';

import { BabcnContainerModule } from 'src/app/shared/components/babcn-container/babcn-container.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    BabcnContainerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // CDK
    LayoutModule,

    //MATERIAL

    MatGridListModule,
  ],
  exports: [
    FooterComponent,
    TranslateModule
  ]
})
export class FooterModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}