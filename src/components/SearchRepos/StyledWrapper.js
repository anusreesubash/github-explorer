import styled from 'styled-components';

const Wrapper = styled.div`
  .container {
    text-align: center;
    margin-top: 5%;
    line-height: 1.15;
  }

  input.search-bar {
    font-size: 16px;
    width: 400px;
    height: 40px;
    margin: 10px;
    padding-inline: 10px;
    border-radius: 6px;
    border: 1px solid #6200ee;
    // box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .2);
  }


  button {
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    padding: 0px 16px;
    border-radius: 4px;
    color: #fff;
    background: #6200ee;
    font-size: 14px;
    height: 40px;
    letter-spacing: .08em;
    text-decoration: none;
    border: none;
    text-align: center;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    :hover {
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
  }

  ul.repos {
    list-style-type:none;

    li {
      margin: auto;
      height: 200px;
      width: 600px;
      overflow: hidden;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      margin-block: 20px;
      padding-inline: 20px;
    }

    .repo-info {
      display: flex;
      justify-content: space-between;
  
      .repo-author {
        margin-top: 20px;
        font-size: 20px;
      }
    }

    .repo-social {
      padding-top: 20px;
      text-align: right;
    }
  }

  
`
export default Wrapper