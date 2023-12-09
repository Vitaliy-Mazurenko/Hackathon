package com.hakaton.team1.helloworld.controllers;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

public class BotController extends TelegramLongPollingBot {
    private final String BOT_TOKEN = "7955999914:AAEzqaa_GxCragPwQhjjC7LtQV_k8L2v2wg";
    private final String BOT_USERNAME = "eVeteranSupportBot";
    private boolean isFirstMessage = true;
    @Override
    public void onUpdateReceived(Update update) {
            if (isFirstMessage) {
                sendWelcomeMessage(update.getMessage().getChatId());
                sendResponse("Оберіть одну опцію \n1. Подати заявку на участь в проекті “Помічник ветерана”\n" + "2. Задати питання", update);
                isFirstMessage = false;
            }
            String answer = update.getMessage().getText();
            if (answer.equals("1")) {

            } else if (answer.equals("2")) {
                System.out.println("Work another one");
            }
    }

    @Override
    public String getBotUsername() {
        return BOT_USERNAME;
    }

    @Override
    public String getBotToken() {
        return BOT_TOKEN;
    }

    private void sendResponse(String message, Update update) {
        SendMessage response = new SendMessage();
        response.setChatId(update.getMessage().getChatId().toString());
        response.setText(message);
        try {
            execute(response);
        } catch (TelegramApiException exception) {
            exception.printStackTrace();
        }
    }

    private void registrationUser(Update update) {

    }

    private void registrationVeteran(Update update) {

    }

    private void registrationRelativeVeteran(Update update) {

    }
    private void sendWelcomeMessage(Long chatId) {
        SendMessage message = new SendMessage();
        message.setChatId(chatId);
        message.setText("Вітаю! Я твій бот. Я готовий обробляти твої команди.");
        try {
            execute(message);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }
}
