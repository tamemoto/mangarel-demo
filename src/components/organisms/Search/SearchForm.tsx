import styled from '@emotion/styled';
import React, { FC, FormEvent } from 'react';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';

type SearchFormProps = {
  handleChange?: (targetName: string, newValue: string) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  values?: { q: string };
  loading?: boolean;
};

const FormWrapper = styled.div`
  margin: 1.25rem auto;
  width: 75%;

  .ui.input > input {
    border-radius: 2.5rem;
  }
`;

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const SearchForm: FC<SearchFormProps> = ({
  handleChange = () => undefined,
  values = { q: '' },
}) => {
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="作品または作者"
          onChange={(event, data) => handleChange('q', String(data.value))}
          value={values.q}
        />
      </form>
    </FormWrapper>
  );
};

export default SearchForm;
