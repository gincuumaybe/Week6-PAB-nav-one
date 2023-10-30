import { Heading, Center, Text } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true" />
      <Center flex={1} p={"4"}>
        <Heading>News Detail</Heading>
        <Text textAlign={"center"}>{params.title}</Text>
      </Center>
    </>
  );
};

export default NewsDetail;

// import React from "react";
// import { ScrollView } from "react-native";
// import { Heading, Image, Text, View } from "native-base";
// import { useNavigation } from "@react-navigation/native";
// import { Header } from "../components";

// const NewsDetail = () => {
//     const navigation = useNavigation();
//     const params = navigation.getParam('params');

//     return (
//         <ScrollView>
//             <Header>
//                 <Text>News</Text>
//             </Header>
//             <View>
//                 <Image
//                     source={{ uri: params.image }}
//                     alt="Image Data"
//                     marginBottom={15}
//                     style={{ height: 200 }}
//                 />
//                 <Text
//                     fontSize="sm"
//                     paddingHorizontal={15}
//                     marginBottom={9}
//                     color="black"
//                 >
//                     {params.date}
//                 </Text>
//                 <Text
//                     lineHeight="xl"
//                     fontSize={24}
//                     paddingHorizontal={15}
//                 >
//                     {params.title}
//                 </Text>
//                 <View
//                     p={7}
//                     width={380}
//                     marginBottom={10}
//                     alignSelf="center"
//                     borderBottomColor="coolGray.300"
//                     borderBottomWidth={1}
//                     paddingHorizontal={15}
//                 />
//                 <Text paddingHorizontal={15} color="black" marginBottom={10}>
//                     {params.content}
//                 </Text>
//             </View>
//         </ScrollView>
//     );
// };

// export default NewsDetail;