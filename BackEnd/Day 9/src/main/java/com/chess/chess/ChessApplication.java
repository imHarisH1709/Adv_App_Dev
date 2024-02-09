package com.chess.chess;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "chess academy",
				version = "1.1.2",
				description = "Help the students to learn chess",
				contact = @Contact(
						name = "Harish",
						email = "imharish.official@gmail.com"
						)
				)
		)
		@Tag(name="",description="")
public class ChessApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChessApplication.class, args);																																																	
	}

}
