import { KafkaService } from '@app/lib-kafka';
import { Module } from '@nestjs/common';
import { SerializerService } from './serializer.service';
import { UserIdentifyController } from './user-identify.controller';
import { UserIdentifyService } from './user-identify.service';
import { ValidatorController } from './validator.service';

@Module({
	imports: [],
	controllers: [UserIdentifyController, ValidatorController],
	providers: [UserIdentifyService, SerializerService, KafkaService],
})
export class UserIdentifyModule {}
