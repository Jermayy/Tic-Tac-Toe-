// @flow
import * as React from 'react';

import Circle from '../Circle';
import Cross from '../Cross';

type Props = {
    position?: number,
    value?: string,
}


const Square = ({ 
    position,
    value
}: 
Props ) :React.Node=> {
const styles={
container:{
    width:'200px',
    height:'200px',
backgroundColor: 'white',
padding: 0,
margin: 0,
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}

};

return(
<div
style={styles.container}
>
{value === 'Circle' && <Circle /> }
{value === 'Cross' && <Cross /> }
{value === 'Empty' && 'Empty'}
</div>
)
}

export default Square;