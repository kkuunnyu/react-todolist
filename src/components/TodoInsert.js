import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import styled from 'styled-components'

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  },[])

  //버튼을 클릭하면 발생할 이벤트
  const onSubmit = useCallback((e)=> {
    onInsert(value);
    setValue('');
    e.preventDefault();
  },[onInsert,value])
 

  return (
    <TodoInserWrapper onSubmit={onSubmit}>
      <input 
      type="text" 
      placeholder='할 일을 입력하세요 🖊' 
      value={value}
      onChange={onChange}
      />
      <button><MdAdd /></button>
    </TodoInserWrapper>
  )
}

const TodoInserWrapper = styled.form`
  display : flex;
  background : #495057;
  
  input{
    background : none;
    font-family: 'Poor Story', cursive;
    outline : none;
    border : none;
    padding : 0.5rem;
    font-size : 1.125rem;
    line-height : 1.5;
    color : #fff;
    &::placeholder {
      color : yellowgreen;
    }
    flex : 1;
  }

  button{
    background : #868296;
    outline : none;
    border : none;
    color : #fff;
    padding : 1rem;
    font-size : 1.125rem;
    cursor : pointer;
    transition : all 0.2s;
    &:hover{
      background : #adb5bd;
    }
  }
`;

export default TodoInsert