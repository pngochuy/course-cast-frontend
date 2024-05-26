import { request, gql } from '@apollo/client';

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async()=>{
    const query = gql`
    query MyQuery {
        courseLists {
          author
          name
          id
          free
          description
          demoUrl
          banner{
            url
          }
          chapter{
            ... on Chapte{
              id
              name
              video{
                url
              }
            }
          }
          totalChapters
          sourceCode
          tag
        }
      }`
      const result = await request(MASTER_URL, query);
      return result;
}
export default{
    getAllCourseList
}