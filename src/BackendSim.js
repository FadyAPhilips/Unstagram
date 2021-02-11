import pic1 from "./assets/puffin.jpg";
import pic2 from "./assets/Tsunami_by_hokusai_19th_century.jpg";
import pic3 from "./assets/ultrawide.jpg";
import pic4 from "./assets/burger.jpg";

class BackendSim {
  static getPostList = () => {
    const postList = [
      {
        name: "Fady",
        picture: pic1,
        profilePic: pic1,
      },
      {
        name: "Amr",
        picture: pic2,
        profilePic: pic2,
      },
      {
        name: "Joe",
        picture: pic3,
        profilePic: pic1,
      },
      {
        name: "Mark",
        picture: pic4,
        profilePic: pic4,
      },
    ];

    return postList;
  };
}

export default BackendSim;
