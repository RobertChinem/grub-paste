import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { Model } from 'mongoose';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { File, FileDocument } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

  create(createFileDto: CreateFileDto) {
    const file = new this.fileModel(createFileDto);
    return file.save();
  }

  findByName(name: string) {
    return this.fileModel.find({
      name: {
        $regex: `.*${name}.*`,
      },
    });
  }

  findAll() {
    return this.fileModel.find();
  }

  findOne(id: string) {
    return this.fileModel.findById(id);
  }

  update(id: string, updateFileDto: UpdateFileDto) {
    return this.fileModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateFileDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.fileModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
