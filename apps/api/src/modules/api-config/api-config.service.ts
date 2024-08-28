import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  GENERAL_CONFIG_NAMESPACE,
  GeneralEnvVars,
} from "./configs/general.config";
import { LOG_CONFIG_NAMESPACE, LogEnvVars } from "./configs/log.config";
import { MONGO_CONFIG_NAMESPACE, MongoDBEnvVars } from "./configs/mongo.config";

@Injectable()
export class ApiConfigService {

  get general(): GeneralEnvVars {
    return this.conf.get(GENERAL_CONFIG_NAMESPACE) as GeneralEnvVars;
  }

  get logger(): LogEnvVars {
    return this.conf.get(LOG_CONFIG_NAMESPACE) as LogEnvVars;
  }

  get mongoDBConfig(): MongoDBEnvVars {
    return this.conf.get(MONGO_CONFIG_NAMESPACE) as MongoDBEnvVars;
  }
  constructor(private conf: ConfigService) {
  }
}
