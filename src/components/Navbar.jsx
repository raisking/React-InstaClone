import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  margin: 10px;
`

const Items = styled.div`
display: inline-block;
padding: 20px;
`

const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
`
class Navbar extends Component {
  render() {  
    return (
      <Bar>
        <div>
          <Items>
            <h3><FaInstagram /> | Instaclone</h3>
          </Items>
          <Items>
            <FaSearch /><input type="text" />
          </Items>
          <Items>
            <div>
              <Icons>
                <Icons-a>
                  {<FaCompass />}
                </Icons-a>
                <Icons-a>
                  {<FaHeartO />}
                </Icons-a>
                <Icons-a>
                  {<FaUser />}
                </Icons-a>
              </Icons>
            </div>
          </Items>
        </div>
      </Bar>
    );
  }
}

export default Navbar