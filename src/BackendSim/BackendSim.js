import pic1 from "../assets/puffin.jpg";
import pic2 from "../assets/Tsunami_by_hokusai_19th_century.jpg";
import pic3 from "../assets/ultrawide.jpg";
import pic4 from "../assets/burger.jpg";

class BackendSim {
  // users = {
  //   0001:{
  //     username: "fady",
  //     profilePic: pic1,
  //   }
  // }

  static getPostList = () => {
    const postList = [
      {
        name: "Fady",
        picture: pic1,
        profilePic: pic1,
        caption: "Kooooo",
      },
      {
        name: "Amr",
        picture: pic2,
        profilePic: pic2,
        caption: "Shooooo",
      },
      {
        name: "Joe",
        picture: pic3,
        profilePic: pic1,
        caption: "Wooooo",
      },
      {
        name: "Mark",
        picture: pic4,
        profilePic: pic4,
        caption: "Mooooo",
      },
    ];

    return postList;
  };
}

export default BackendSim;
