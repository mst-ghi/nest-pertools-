## Nest Persian Tools

> Have the most used and sensitive Persian tools!
> This package uses [`persian-tools2`](https://www.npmjs.com/package/persian-tools2)
> &NewLine;

### Installation

```bash
$ npm install --save nest-pertools
# or
$ yarn add nest-pertools
```

&NewLine;

### Getting Started

> Import PersianToolsModule in the root module of the application. `app.module.ts`

&NewLine;

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersianToolsModule } from 'nest-pertools';

@Module({
  imports: [PersianToolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

&NewLine;

> Inject PersianToolsService in the your service of the application. `your.service.ts`

&NewLine;

```typescript
import { Injectable } from '@nestjs/common';
import { PersianToolsService } from 'nest-pertools';

@Injectable()
export class YourRedisService {
  constructor(private readonly toolsService: PersianToolsService) {}

  // You can use all toolsService methods ...
}
```

#### PersianToolsService Api

| Method                      | Arguments                                                                      |
| --------------------------- | ------------------------------------------------------------------------------ |
| `convertFromString`         | ( input, options?: { digits?: string, addCommas?: boolean, fuzzy?: boolean } ) |
| `convertFromNumber`         | ( input, options?: {ordinal: boolean} )                                        |
| `addCommas`                 | ( input )                                                                      |
| `removeCommas`              | ( input )                                                                      |
| `digitsArToFa`              | ( input )                                                                      |
| `digitsArToEn`              | ( input )                                                                      |
| `digitsEnToFa`              | ( input )                                                                      |
| `digitsFaToEn`              | ( input )                                                                      |
| `verifyIranianNationalId`   | ( input )                                                                      |
| `getPlaceByIranNationalId`  | ( input )                                                                      |
| `verifyCardNumber`          | ( input )                                                                      |
| `getBankNameFromCardNumber` | ( input )                                                                      |
| `isPersian`                 | ( input )                                                                      |
| `toPersianChars`            | ( input )                                                                      |
| `urlFix`                    | ( input )                                                                      |
| `billRials`                 | ( input: { billId: number, paymentId: number } )                               |
| `billTomans`                | ( input: { billId: number, paymentId: number } )                               |
| `billType`                  | ( input: { billId: number, paymentId: number } )                               |
| `billValidBillId`           | ( input: { billId: number, paymentId: number } )                               |
| `billValidBillPayment`      | ( input: { billId: number, paymentId: number } )                               |
| `billValid`                 | ( input: { billId: number, paymentId: number } )                               |
| `billBarcode`               | ( input: { billId: number, paymentId: number } )                               |
| `billFindByBarcode`         | ( input: string )                                                              |
| `shebaValidate`             | ( input: string )                                                              |
| `shebaRecognize`            | ( input: string )                                                              |
| `halfSpace`                 | ( input: string )                                                              |

&NewLine;

##### Change Log

> See [Changelog](CHANGELOG.md) for more information.

##### Contributing

> Contributions welcome! See [Contributing](CONTRIBUTING.md).

##### Author

> **Mostafa Gholami** [`mst-ghi`](https://github.com/mst-ghi)
