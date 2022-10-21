import { DataSource } from "typeorm";
import { User as Users } from "@app/modules/accounts/entities/User";
import { Post as Posts } from "@app/modules/posts/entities/Post";

export const connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "db_blog",
  synchronize: true,
  migrationsRun: false,
  entities: [Users, Posts],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});
