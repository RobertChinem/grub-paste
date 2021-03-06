import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema()
export class File {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  content: string;

  @Prop()
  protected: boolean;

  @Prop()
  pattern: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
