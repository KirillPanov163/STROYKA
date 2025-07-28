'use client';

import { CreateContactForm } from './CreateContactForm';
import { ContactsList } from './ContactsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

export const ContactsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Управление контактами</h1>

      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">Все контакты</TabsTrigger>
          <TabsTrigger value="create">Создать контакт</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <ContactsList />
        </TabsContent>

        <TabsContent value="create">
          <CreateContactForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
