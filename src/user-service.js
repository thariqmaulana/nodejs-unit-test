//anggap saja ini tempat mengolah logicnya 

import { UserRepository } from "./user-repository";

export class UserService{
  constructor(userRepository){
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new UserRepository()
    }
  }

  //kita panggil userRepositorynya
  save(user) {
    //import dari class
    this.userRepository.save(user);
  }

  findById(id) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}