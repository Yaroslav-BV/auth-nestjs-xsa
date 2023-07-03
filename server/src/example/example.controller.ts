import { Controller, Get } from '@nestjs/common'
import { Scopes } from '../auth/decorators/scope.decorator'
import { Scope } from '../auth/enums/scope.enum'

@Controller('example')
export class ExampleController {
  @Get('view-access')
  @Scopes(Scope.View)
  getViewData() {
    return 'View access'
  }

  @Get('edit-access')
  @Scopes(Scope.Edit)
  getEditData() {
    return 'Edit access'
  }

  @Get('all-access')
  @Scopes(Scope.View, Scope.Edit)
  getAllData() {
    return 'All access'
  }
}
