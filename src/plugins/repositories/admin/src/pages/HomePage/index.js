import React from "react";
import styled from "styled-components";
import { BaseHeaderLayout } from "@strapi/design-system";
import { Table, Thead, Tbody, Tr, Td, Th } from '@strapi/design-system';

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <BaseHeaderLayout
        title="React Avançado Repositories"
        subtitle="A list of our repositories in React Avançado course."
      />
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
          </Tr>
        </Thead>
      </Table>
    </Wrapper>
  );
};

export default HomePage;
