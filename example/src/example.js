import React, { Component } from 'react';
import {
  Button,
  Columns,
  Column,
  Input,
  Textarea,
  Select,
  Label,
  Checkbox,
  Table,
  Td,
  Th,
  Tr,
  Tbody,
  Thead,
  Tfoot,
} from '../../src';


export default class Example extends Component {
  render() {
    return (
      <div>
        <Button >test</Button>
        <Button size="isLarge" states="isActive">Guthub</Button>
        <Button size="isSmall" states="isActive" icon="fa fa-github">Github</Button>
        <Columns>
          <Column size="is2" customStyle={{ background: '#ccc' }}>aaaa</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
        </Columns>
        <Input
          hasAddons
          state="isDisabled"
          color="isDanger"
          size="isSmall"
          help={{
            text: 'help text',
            color: 'isSuccess',
          }}
        />
        <Textarea
          state="isLoading"
          color="isInfo"
          help={{
            text: 'help text',
            color: 'isSuccess',
          }}
        />
        <Label>examples</Label>
        <Select>
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
        <Checkbox>Remember me</Checkbox>

        <Table isStriped>
          <Thead>
            <Tr>
              <Th>One</Th>
              <Th>Two</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Three</Td>
              <Td>Four</Td>
            </Tr>
            <Tr>
              <Td>Three</Td>
              <Td>Four</Td>
            </Tr>
          </Tbody>
        </Table>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>InsTrument</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tfoot>
            <Tr>
             <Th className="sad">Name</Th>
             <Th>InsTrument</Th>
             <Th></Th>
             <Th></Th>
            </Tr>
          </Tfoot>
          <Tbody>
            <Tr>
              <Td>Misty Abbott</Td>
              <Td>Bass Guitar</Td>
              <Td class="is-icon">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </Td>
              <Td class="is-icon">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>John SmiTh</Td>
              <Td>RhyThm Guitar</Td>
              <Td class="is-icon">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </Td>
              <Td isIcon>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>Robert Mikels</Td>
              <Td>Lead Guitar</Td>
              <Td isIcon>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </Td>
              <Td isIcon>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  }
}
