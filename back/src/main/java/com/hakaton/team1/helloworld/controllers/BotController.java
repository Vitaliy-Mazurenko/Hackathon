package com.hakaton.team1.helloworld.controllers;

import com.hakaton.team1.helloworld.models.Faq;
import com.hakaton.team1.helloworld.services.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.ReplyKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.KeyboardRow;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.util.ArrayList;
import java.util.List;

@Component
public class BotController extends TelegramLongPollingBot {
    private final String BOT_TOKEN = "6955999914:AAEzqaa_GxCragPwQhjjC7LtQV_k8L2v2wg";
    private final String BOT_USERNAME = "eVeteranSupportBot";

    @Autowired
    private FaqService faqService;

    private enum UserState {
        MAIN_MENU,
        FAQ_MENU,
        FAQ_QUESTION,
        FAQ_ANSWER,
        RETURN_TO_FAQ,
        RETURN_TO_MAIN_MENU
    }

    private UserState userState = UserState.MAIN_MENU;
    private boolean isFirstMessage = true;

    @Override
    public void onUpdateReceived(Update update) {
        if (update.hasMessage() && update.getMessage().hasText()) {
            String messageText = update.getMessage().getText();

            switch (userState) {
                case MAIN_MENU:
                    handleMainMenu(update);
                    break;
                case FAQ_MENU:
                    handleFaqMenu(update);
                    break;
                case FAQ_QUESTION:
                    handleFaqQuestion(update, messageText);
                    break;
                case FAQ_ANSWER:
//                    handleFaqAnswer(update, messageText);
                    break;
                case RETURN_TO_FAQ:
//                    handleReturnToFaq(update, messageText);
                    break;
                case RETURN_TO_MAIN_MENU:
//                    handleReturnToMainMenu(update, messageText);
                    break;
                default:
                    break;
            }
        }


//            if (isFirstMessage) {
//                sendWelcomeMessage(update.getMessage().getChatId());
//                sendResponse(
//                """
//                Оберіть одну опцію
//                1. Подати заявку на участь в проекті “Помічник ветерана”
//                2. Задати питання
//                 """, update);
//                isFirstMessage = false;
//            }
//            String answer = update.getMessage().getText();
//            if (answer.equals("1")) {
//
//            } else if (answer.equals("2")) {
//                System.out.println("Work another one");
//            }
    }

    private void handleFaqQuestion(Update update, String selectedTitle) {
            Long chatId = update.getMessage().getChatId();

            // Retrieve the FAQ based on the selected title
            Faq selectedFaq = faqService.getFaqByTitle(selectedTitle);

            if (selectedFaq != null) {
                // Send the answer to the user
                SendMessage answerMessage = new SendMessage();
                answerMessage.setChatId(chatId);
                answerMessage.setText("Answer:\n" + selectedFaq.getQuestion());

                try {
                    execute(answerMessage);
                } catch (TelegramApiException e) {
                    e.printStackTrace();
                }
            }
    }

    private void handleFaqMenu(Update update) {
        ReplyKeyboardMarkup replyKeyboardMarkup = new ReplyKeyboardMarkup();
        List<KeyboardRow> keyboardRows = new ArrayList<>();

        List<Faq> faqs = faqService.getAllFaqs();
        for (Faq faq :
                faqs) {
            KeyboardRow row = new KeyboardRow();
            row.add(faq.getTitle());
            keyboardRows.add(row);
        }

        replyKeyboardMarkup.setKeyboard(keyboardRows);

        SendMessage message = new SendMessage();
        message.setChatId(update.getMessage().getChatId());
        message.setText("Select an FAQ:");
        message.setReplyMarkup(replyKeyboardMarkup);


        try {
            execute(message);
            userState = UserState.FAQ_QUESTION;
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    private void handleMainMenu(Update update) {
        sendWelcomeMessage(update.getMessage().getChatId());
        sendResponse(
                """
                        Оберіть одну опцію
                        1. Задати питання
                        2. Подати заявку на участь в проекті “Помічник ветерана”
                         """, update);
        sendMainMenu(update.getMessage().getChatId());
    }

    private void sendMainMenu(Long chatId) {
        ReplyKeyboardMarkup replyKeyboardMarkup = new ReplyKeyboardMarkup();
        List<KeyboardRow> keyboardRows = new ArrayList<>();

        KeyboardRow row1 = new KeyboardRow();
        row1.add("FAQ");
        keyboardRows.add(row1);

        KeyboardRow row2 = new KeyboardRow();
        row2.add("Registration");
        keyboardRows.add(row2);

        // Set the keyboard
        replyKeyboardMarkup.setKeyboard(keyboardRows);

        // Send the main menu
        SendMessage message = new SendMessage();
        message.setChatId(chatId);
        message.setText("Hello! Select the option:");
        message.setReplyMarkup(replyKeyboardMarkup);
        try {
            execute(message);
            userState = UserState.FAQ_MENU;
        } catch (TelegramApiException e) {
            e.printStackTrace();
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

    private void faqDialog(Long chatId) {
        SendMessage message = new SendMessage();
        message.setChatId(chatId);

    }
}
