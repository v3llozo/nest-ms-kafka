import { Module } from '@nestjs/common';
import { SrvKafkaController } from './srv-kafka.controller';
import { SrvKafkaService } from './srv-kafka.service';

@Module({
	imports: [],
	controllers: [SrvKafkaController],
	providers: [SrvKafkaService],
})
export class SrvKafkaModule {}
