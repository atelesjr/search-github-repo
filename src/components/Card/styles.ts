import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-flow: column;

    width: 320px;
    padding: 8px;
    border-radius: 5px;
    box-sizing: border-box;

    background-color: #000040;
    color: #ccc;
    margin-bottom: 10px;
    cursor: pointer;

    .header {
        width: 100%;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
    
        .title{
            margin-bottom: 8px;

            .name {
                font-size: 15px;
                font-weight: 600;
                color: #fcdf14;
            }

        }

        .subtitle {
            font-size: 11px;
            color: #fff;
            
            .line1, .line2{
                display: flex;
                justify-content: space-between; 

                width: 100%;

            }

            .line1 {
                margin-bottom: 5px;
            }
        }
    }

    .body{
        padding: 10px 5px;

        font-size: 12px;
    }



`